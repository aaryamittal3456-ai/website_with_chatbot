# Shemo – Beauty at Your Door

A cosmetics e-commerce site I built with an AI chatbot baked into the backend, not just a Q&A widget stuck on top.

Live: https://shemocosmtic.netlify.app

## What's in it

- Shop page for skincare, makeup and haircare products
- An AI assistant that actually knows the store's policies and inventory, and can answer questions about products, delivery, returns etc.
- Every order placed on the site gets logged straight into Google Sheets, and stock gets updated automatically
- Feedback and cancellations also flow into sheets, so there's a simple record of everything without touching a database

## How it's put together

- Plain HTML/CSS/JS for the frontend, no framework
- n8n running the actual logic — the AI agent, RAG lookup over the policy doc, and writing to Google Sheets
- Netlify hosting the site, with a small serverless function acting as a middleman between the browser and n8n (mainly to dodge CORS issues)
- Deploys automatically from GitHub whenever I push to main

## Why I built it

Wanted to actually build something with n8n instead of just watching tutorials — a full order flow with an AI layer felt like a good way to hit real problems (CORS, webhook URLs breaking when I switched accounts, serverless functions not picking up, etc.) instead of toy examples.

## Stack

HTML/CSS/JS · n8n · OpenAI · Google Sheets · Netlify + Netlify Functions
