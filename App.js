import React from 'react';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView
      source={{ uri: 'https://siembra-0c282851.base44.app' }}
      style={{ marginTop: 40 }}
    />
  );
}
