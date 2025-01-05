import { Dropzone, type FileWithPath } from '@mantine/dropzone'
import { notifications } from '@mantine/notifications'
import { type ReactElement, type ReactNode, useState } from 'react'
import { NOTIF_INVALID_FILE } from './notification'

export function App(): ReactElement {
  const [files, setFiles] = useState<FileWithPath[]>([])

  return (
    <Dropzone
      onDrop={setFiles}
      onReject={(): void => {
        notifications.show(NOTIF_INVALID_FILE)
      }}
      activateOnClick={false}
      accept={['video/*', 'image/*']}
    >
      {files.length === 0 ? (
        <div className='flex h-dvh items-center justify-center text-gray-500'>Add Files</div>
      ) : (
        <Files files={files} />
      )}
    </Dropzone>
  )
}

function Files({ files }: { files: FileWithPath[] }): ReactNode {
  return (
    <div
      className='grid place-content-center place-items-center'
      style={{
        gridTemplateColumns: `repeat(${Math.min(files.length, 4)}, minmax(0, 1fr))`,
      }}
    >
      {files.map((file, index) => (
        <div key={index}>
          <Media file={file} />
        </div>
      ))}
    </div>
  )
}

function Media({ file }: { file: FileWithPath }): ReactElement {
  const url = URL.createObjectURL(file)
  if (file.type.startsWith('video/')) {
    return (
      <video className='h-auto max-h-screen max-w-full' muted autoPlay loop>
        <source src={url} type={file.type} />
      </video>
    )
  }
  return <img src={url} alt={file.name} className='h-auto max-h-screen max-w-full' />
}
