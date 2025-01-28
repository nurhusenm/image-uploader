# Image Uploader

A simple web application that allows users to upload images and get a shareable link. The images are uploaded to Cloudinary, a cloud-based image management service.

## Features

- Upload images from your device.
- Automatically uploads images to Cloudinary.
- Displays the uploaded image on the page.
- Provides a shareable URL for the uploaded image.
- Copy the URL to the clipboard with a single click.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Image Storage**: Cloudinary
- **File Upload Handling**: Multer
- **Environment Variables**: Dotenv
- **CORS Handling**: CORS

## How It Works

1. The user selects an image file using the file input.
2. The image is sent to the backend server via a `POST` request.
3. The backend server uploads the image to Cloudinary using the Cloudinary SDK.
4. Once the upload is complete, the backend returns the image URL to the frontend.
5. The frontend displays the uploaded image and provides a shareable URL.
6. The user can copy the URL to the clipboard using the "Copy URL" button.

## Setup Instructions

### Prerequisites

- Node.js installed on your machine.
- A Cloudinary account (free tier available).

### Steps to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/nurhussenm/image-uploader
   cd image-uploader
   ```
