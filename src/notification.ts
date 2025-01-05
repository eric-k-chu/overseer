import type { NotificationData } from '@mantine/notifications'

export const NOTIF_INVALID_FILE: NotificationData = {
  title: 'Invalid File Type',
  message: 'Please upload an image or video',
  color: 'red',
  classNames: {
    root: 'fixed bottom-4 right-4 bg-black',
    title: 'text-white/50',
    description: 'text-white',
    closeButton: 'bg-transaprent hover:bg-white/20',
  },
}
