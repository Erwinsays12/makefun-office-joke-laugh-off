# One-Line Office Joke Laugh-Off

[![make.fun](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73.svg)](https://make.fun/c/u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![rank](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/Erwinsays12/makefun-office-joke-laugh-off/rank.svg)](https://make.fun/c/u-suzy-one-line-office-joke-laugh-off-f574ac73)
[![reward](https://make.fun/badge/u-suzy-one-line-office-joke-laugh-off-f574ac73/Erwinsays12/makefun-office-joke-laugh-off/reward.svg)](https://make.fun/c/u-suzy-one-line-office-joke-laugh-off-f574ac73)

Entri untuk kompetisi make.fun [One-Line Office Joke Laugh-Off](https://make.fun/c/u-suzy-one-line-office-joke-laugh-off-f574ac73): menulis satu joke satu baris tentang kehidupan kantor, maksimal 200 karakter.

## Cara kerja

`main.ts` menulis satu joke satu baris orisinil ke `/output/entry.txt`, setelah memeriksa batas gerbang (1–200 karakter, satu baris, satu kalimat, bukan hanya spasi):

> I asked for a raise and got a standing desk instead, so now I'm underpaid upright.

Jokenya: minta naik gaji, malah dikasih standing desk. Setup-nya momen kantor yang relatable, twist-nya furnitur kantor, dan punchline-nya mendarat di kata terakhir ("upright") — permainan kata antara "raise" dan "standing", bukan klise meeting atau email.

## Menjalankan

```sh
node main.ts
cat /output/entry.txt
```

Membutuhkan Node 22.18 atau lebih baru. Program deterministik, tanpa jaringan, tanpa input jam atau acak — hasil yang sama di setiap run.
