
<!-- ABOUT THE PROJECT -->

## About StockAnalytica

StockAnalytica is a web application built in ReactJS to help new traders enter the trading world by allowing them to trade stocks in realtime using the virtual currency provided on signup. Users can bookmark their favourite stocks and observe them.
StockAnalytica shows stock with realtime data with news related to them and various important terms related to them.

### Built With

-   [React](https://reactjs.org)
-   [SASS](https://sass-lang.com)
-   [Firebase](https://firebase.google.com)
-   [ChartJS](https://www.chartjs.org/docs/latest/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy of StockAnalytica up and running follow these simple steps.

### Prerequisites

npm is required to start with local development.

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1. Fork the repo and then clone the repo
    ```sh
    git clone https://github.com/your_username_/StockAnalytica.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Get the API keys from:

    - [IEX API](https://iexcloud.io)
    - [FMP](https://financialmodelingprep.com/developer/docs/)
    - [Alpha Vantage](https://www.alphavantage.co)

4. Create a `.env` file in the root directory. Enter your API in `.env`
    ```sh
    REACT_APP_IEX_KEY_1 = 'API KEY'
    REACT_APP_IEX_KEY_2 = 'API KEY'
    REACT_APP_IEX_KEY_3 = 'API KEY'
    REACT_APP_FMP_KEY = 'FMP API KEY'
    ```
    The same IEX API key can be used in all 3 API slots. This is just to not exhaust the monthly quota of API calls. Enter the FMP key in the file too. Use the Alpha Vantage API key in the `dashboard.js` file in the `apiKeys` array.
5. Create a Firebase project for web and enable the use of Firestore and Realtime DB. Enter the Firebase credentials in the `.env` file using the same variables used in `auth.js`.

6. Download the [JSON](https://drive.google.com/drive/folders/1Isf4VAumMfD3fMKcZoUmssIZ_JzYxq0c?usp=sharing) file and import in Firebase Realtime DB. This is to limit the API calls to IEX Cloud.
 <!-- USAGE EXAMPLES -->

## Usage

StockAnalytica can be used by traders who want to enter the trading world, they can practice trading stocks here for free using virtual currency. It can also be used by traders who want to keep a watch on some stocks in the market.

