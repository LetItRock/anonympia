'use client';

import { useUser } from '@clerk/nextjs';
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from '@novu/notification-center';

export function NotificationCenter() {
  const { isSignedIn, user } = useUser();

  if (!isSignedIn) {
    return null;
  }

  return (
    <NovuProvider
      backendUrl="https://api.novu.co"
      socketUrl="https://ws.novu.co"
      subscriberId={user?.id}
      applicationIdentifier={'ztEny8OOm6c-'}
    >
      <PopoverNotificationCenter colorScheme={'light'}>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
}
