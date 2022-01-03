## Getting Started

```bash
npm run dev
```

- Open [http://localhost:3000](http://localhost:3000)

## 仕組みなどメモ

- launcher にある Cloud Functions を叩いてサーバーを制御している。
- launcher の中には whitelist があるので指定した mail を持っている Google Account 以外はオペレーションできないようにしている。
