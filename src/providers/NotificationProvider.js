import React, { useState, useCallback } from 'react';

export const NotificationContext = React.createContext({
  notification: null,
  addNotification: () => {},
  removeNotification: () => {}
});

export default function NotificationProvider({ children }) {
  const [notification, setNotification] = useState(null);

  const removeNotification = () => setNotification(null);

  const addNotification = (message = 'Task Done', severity = 'success') => setNotification({ message, severity });

  const contextValue = {
    notification,
    addNotification: useCallback((message, severity) => addNotification(message, severity), []),
    removeNotification: useCallback(() => removeNotification(), [])
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
}