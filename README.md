# Getnet Healthcare App

Instaill the app from  https://expo.dev/accounts/mebrieawoke/projects/getnet-healthcare/builds/e1b6cf83-83f9-4e9c-9bf3-1bbcfb4177d6


A polished Expo React Native app for a healthcare clinic, built with Expo Router. It includes a landing home screen, service catalog, appointment booking form, and contact details.

## Features

- Home dashboard with profile, location, and patient testimonials
- Service list with animated cards and details
- Appointment booking form with validation and local persistence
- Contact options via email, phone, WhatsApp, and address
- Expo Router navigation and responsive mobile layout

## Tech Stack

- Expo + Expo Router
- React Native
- React Hook Form
- Async Storage
- React Native Reanimated
- Expo Image

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the app:
   ```bash
   npx expo start
   ```

3. Run on a device or emulator:
   ```bash
   npm run android
   npm run ios
   npm run web
   ```

## Project Structure

- `app/` — Expo Router screens and navigation
- `src/components/` — reusable UI components
- `src/constants/` — colors and static data
- `src/services/` — API and booking logic
- `src/assets/` — images and icons

## Notes

- App is configured for Expo SDK 52
- Android package is `com.Fewosclinic.healthcare`
- Uses local storage for the last appointment record
