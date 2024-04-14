This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Project Documentation

### Libraries Used:

#### React Navigation
[React Navigation](https://reactnavigation.org/) is used for handling navigation within the Pokémon app. It provides a flexible and easy-to-use navigation solution for React Native applications. With React Navigation, we can seamlessly navigate between different screens, manage navigation state, and customise navigation options.

#### React Native Vector Icons
[React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons) is employed to integrate vector icons into the Pokémon app. These icons are essential for enhancing the visual appeal and usability of the application. By using vector icons, we ensure crisp and scalable icons across various screen sizes and resolutions.

#### React Query
[React Query](https://react-query.tanstack.com/) is used for data fetching and caching within the Pokémon app. It provides a powerful and intuitive solution for managing asynchronous data in React/React Native applications. With React Query, we can easily fetch data from APIs, handle loading and error states

#### FlashList
The Pokémon app leverages the [FlashList](https://shopify.github.io/flash-list/) component for implementing infinite scroll functionality. FlashList provides a customizable and performant solution for rendering large lists of data with support for feature from FlatList itself. With FlashList, users can seamlessly browse through extensive lists of Pokémon without experiencing lag or delays.

### Usage:

- **Navigation**: React Navigation is employed to navigate between different screens within the Pokémon app. Users can navigate from the home screen to the details screen to view specific Pokémon details, as well as to the search screen to search for Pokémon by name.
  
- **Icons**: React Native Vector Icons is used to integrate visually appealing icons throughout the Pokémon app. Icons are used for various UI elements such as buttons, navigation items, and list items, enhancing the overall user experience.
  
- **Data Fetching**: React Query is utilized for fetching Pokémon data from external APIs. This includes fetching individual Pokémon details, Pokémon species information, and search results. React Query simplifies the process of handling asynchronous data fetching, caching, and error handling.
  
- **Infinite Scroll**: The FlashList component coupled with React Query is employed to implement infinite scroll functionality for displaying Pokémon lists. As users scroll through the list of Pokémon, additional data is fetched dynamically, allowing for seamless browsing without the need to load all Pokémon data.
