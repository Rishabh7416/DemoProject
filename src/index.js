import * as Sentry from '@sentry/react-native'
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Route from './routes/Route';

const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();

Sentry.init({
  dsn: 'https://dc5f4f35647542c598fb609cd484ff4b@o1263048.ingest.sentry.io/6442543',
  tracesSampleRate: 1.0,
  integrations: [
    new Sentry.ReactNativeTracing({
      routingInstrumentation,
      tracingOrigins: ['localhost', 'http://localhost:8081/', /^\//],
    }),
  ],
  enableAutoPerformanceTracking: true,
  enableNative: false,
});

function ContainerComponent() {
  const navigation = React.useRef();
  return (
    <NavigationContainer
      ref={navigation}
      onReady={() => {
        routingInstrumentation.registerNavigationContainer(navigation);
      }}>
      <Route />
    </NavigationContainer>
  );
}

export default Sentry.wrap(ContainerComponent);