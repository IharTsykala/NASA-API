import React from "react"
import "./App.scss"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./Redux/index"
import cardItemSaga from "./Redux/store/CardItem/CardItem.sagas"
import descriptionItemSaga from "./Redux/store/DescriptionItem/DescriptionItem.sagas"
import MainPage from "./Pages/MainPage/MainPage"
import Box from "@material-ui/core/Box"
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  rootReducer,
  composeWithDevTools({ trace: true, traceLimit: 25 })(
    applyMiddleware(sagaMiddleware)
  )
)

sagaMiddleware.run(cardItemSaga)
sagaMiddleware.run(descriptionItemSaga)

const App: React.FC = () => (
  <Provider store={store}>
    <ScopedCssBaseline>
      <Box component="div" className={"wrapper"}>
        <Box component="div" className={"main"}>
          <MainPage />
        </Box>
      </Box>
    </ScopedCssBaseline>
  </Provider>
)

export default App
