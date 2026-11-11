"""ფოტოების ერთჯერადი იმპორტი: import/images.json-ში ჩამოთვლილ ბმულებს
ჩამოტვირთავს, 1000px-მდე შეამცირებს და images/-ში შეინახავს (JPEG).
უკვე არსებულ ფაილს გამოტოვებს. გაშვება: python import/fetch_images.py"""
import io, json, os, sys, time, urllib.request
from PIL import Image, ImageOps

items = json.load(open('import/images.json', encoding='utf-8'))
ok = skipped = 0
failed = []
for it in items:
    path = it['path']
    if os.path.exists(path):
        skipped += 1
        continue
    req = urllib.request.Request(it['url'], headers={
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
        'Referer': it.get('referer', ''), 'Accept': 'image/avif,image/webp,image/*,*/*;q=0.8'})
    data = None
    err = 'ცარიელი პასუხი'
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                data = r.read()
            break
        except Exception as e:
            err = str(e); time.sleep(2)
    if not data:
        failed.append({'path': path, 'url': it['url'], 'error': err}); continue
    try:
        im = Image.open(io.BytesIO(data)); im.load()
        im = ImageOps.exif_transpose(im)
        if im.mode in ('RGBA', 'LA', 'P'):
            im = im.convert('RGBA'); bg = Image.new('RGB', im.size, 'white'); bg.paste(im, mask=im.split()[-1]); im = bg
        else:
            im = im.convert('RGB')
        im.thumbnail((1000, 1000), Image.LANCZOS)
        os.makedirs(os.path.dirname(path), exist_ok=True)
        im.save(path, 'JPEG', quality=82, optimize=True, progressive=True)
        ok += 1
    except Exception as e:
        failed.append({'path': path, 'url': it['url'], 'error': 'image: ' + str(e)})
print(f'ჩამოიტვირთა: {ok}, უკვე იყო: {skipped}, ვერ მოხერხდა: {len(failed)}')
for f in failed:
    print('  ✗', f['path'], f['url'], f['error'])
json.dump(failed, open('import/failed.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
