# Deploy Backend to Render

## Step 1: Prepare Your Backend
✅ **DONE** - Your backend is now ready for Render deployment!

## Step 2: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and create a new repository
2. Name it: `activecommerce-backend`
3. Upload ONLY the `backend` folder contents to this repository

## Step 3: Deploy on Render
1. Go to [Render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository `activecommerce-backend`
4. Configure:
   - **Name**: `activecommerce-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free (for testing)

## Step 4: Set Environment Variables (Optional)
If you want to hide your email credentials:
1. In Render dashboard → Environment
2. Add:
   - `EMAIL_USER`: activecommercecentrepatna@gmail.com
   - `EMAIL_PASS`: qhnl oyfg lvvq flrj

## Step 5: Get Your Live URL
After deployment, Render will give you a URL like:
`https://activecommerce-backend.onrender.com`

## Step 6: Update Frontend (if needed)
✅ **DONE** - Your index.html is already updated to use:
`https://activecommerce-backend.onrender.com`

## Important Notes:
- Free Render services sleep after 15 minutes of inactivity
- First request after sleep takes 30-60 seconds to wake up
- For production, consider upgrading to paid plan ($7/month)

## Test Your Deployment:
After deployment, test these URLs:
- `https://activecommerce-backend.onrender.com/submit-admission`
- `https://activecommerce-backend.onrender.com/submit-contact`