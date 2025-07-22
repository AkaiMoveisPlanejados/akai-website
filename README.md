This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## 🖼️ How to Change Pinterest Pictures on the Website

If you want to update the Pinterest images displayed on the website, **you don’t need to know how to code** — just follow these steps:

### ✅ Steps to Update Pinterest Pictures

1. **Go to the file**  
   [Click here to open the `PinterestGallery.js` file on GitHub](https://github.com/AkaiMoveisPlanejados/akai-website/blob/main/src/app/components/PinterestGallery/PinterestGallery.js)  
   *(Make sure you're signed in with a GitHub account that has access to the repository.)*

2. **Find the list of images**  
   You'll see a list like this:

   ```js
   const projects = [
     {
       imgSrc: "https://i.pinimg.com/736x/....jpg",
       pinterestUrl: "https://pin.it/xxxxxxx",
     },
     // more items...
   ];
Edit the file
Click the ✏️ pencil icon at the top right of the file to start editing.

Replace the image URLs

imgSrc: the direct image link from Pinterest.

pinterestUrl: the Pinterest page URL (the pin itself).

Example:

```js
{
  imgSrc: "https://i.pinimg.com/736x/new-image.jpg",
  pinterestUrl: "https://pin.it/newPinId",
}
```
## Commit the changes
Scroll to the bottom of the page, write a short message like Updated Pinterest images, and click Commit changes.

📌 Notes
You can add more image blocks by copying an existing one and updating the URLs.

Always include both imgSrc and pinterestUrl for each image.
