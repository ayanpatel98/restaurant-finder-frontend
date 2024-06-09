
# Paprika Restaurant Finder

This project is a Next.js application designed to help users find restaurants catering to specific dietary preferences such as vegan, vegetarian, and gluten-free. The application uses the `app` directory for routing, creation of server side components and server-side rendering (SSR) to enhance SEO.

## Setup and Running the Project

To set up and run the project locally using npm, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ayanpatel98/restaurant-finder-frontend.git
   cd restaurant-finder-frontend
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

4. **Visit the Application:**

   Open your browser and navigate to `http://localhost:3000` to see the application running.

## Project Structure, Dynamic Content Generation and Scalability

- The 'data/restaurants-list.js' file is a dummy database which includes all the restaurants specifit to the city and state
- The app folder contains all the designing css code in the globals.css file and business logic.
- Dynamic pages can be generated to fetch and display the restaurants specific to the city and state using the dynamic routes which are created in the app folder '[city]/[state]/page.js', which also helps to support an infinite number of city/state combinations to make this application scalable.
- Reusable components are created in the 'app/components' folder

## SEO Optimizations (Bonus)

To enhance SEO, the following optimizations are implemented:

1. **Metadata:**
   - Each dynamic page includes metadata such as title, description, and keywords to improve search engine visibility.

2. **Server-Side Rendering (SSR):**
   - By using SSR, the content is pre-rendered on the server, ensuring that search engines can crawl and index the pages effectively.
   - This approach provides the latest data on each request, enhancing the user experience and improving SEO.

## Conclusion

This Next.js application is designed with scalability and SEO in mind, leveraging server-side rendering and dynamic routing to create a robust restaurant finder tool. By following the setup instructions, you can run the project locally and explore its features.
