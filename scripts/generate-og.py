"""Generate the 1200x630 Open Graph preview card shown when the site URL is
shared on LinkedIn / Twitter / Slack."""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
BG = (15, 23, 42)          # slate-950
ACCENT = (69, 191, 186)    # accent-400
WHITE = (255, 255, 255)
MUTED = (148, 163, 184)    # slate-400

F = "/usr/share/fonts/truetype/dejavu/DejaVuSans%s.ttf"
name_f = ImageFont.truetype(F % "-Bold", 76)
title_f = ImageFont.truetype(F % "-Bold", 40)
tag_f = ImageFont.truetype(F % "", 30)
meta_f = ImageFont.truetype(F % "", 26)
mono_f = ImageFont.truetype(F % "-Bold", 90)

img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# Subtle teal wash in the lower-right so the card isn't a flat rectangle.
glow = Image.new("RGB", (W, H), BG)
gd = ImageDraw.Draw(glow)
for i in range(120, 0, -1):
    r = i * 7
    a = i / 120
    c = tuple(int(BG[k] + (30, 110, 108)[k] * a * 0.5) for k in range(3))
    gd.ellipse([W - r, H - r, W + r, H + r], fill=c)
img = Image.blend(img, glow, 0.55)
d = ImageDraw.Draw(img)

# Accent rule down the left edge.
d.rectangle([0, 0, 14, H], fill=ACCENT)

x = 90
d.text((x, 150), "Amirhossein", font=name_f, fill=WHITE)
d.text((x, 240), "Esmaeilipour", font=name_f, fill=WHITE)
d.text((x, 360), "Android Software Engineer", font=title_f, fill=ACCENT)
d.text((x, 420), "Building scalable mobile systems and AI-powered apps",
       font=tag_f, fill=MUTED)
d.text((x, 500), "Tehran, Iran   ·   github.com/Amirhesp", font=meta_f, fill=MUTED)

# Monogram tile, mirroring the favicon.
bx, by, s = W - 250, 90, 150
d.rounded_rectangle([bx, by, bx + s, by + s], radius=34, fill=(43, 163, 160))
tw = d.textbbox((0, 0), "AE", font=mono_f)
d.text((bx + s / 2 - (tw[2] - tw[0]) / 2, by + s / 2 - (tw[3] - tw[1]) / 2 - tw[1]),
       "AE", font=mono_f, fill=WHITE)

out = ("/home/amirhossein/Documents/personal_document/personal_website/"
       "public/og.png")
img.save(out, "PNG", optimize=True)
print("wrote", out, img.size)
