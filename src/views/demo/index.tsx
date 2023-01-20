import type { FC, ReactNode } from 'react'
import { memo } from 'react'
interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = () => {
  return <div>Demo</div>
}

export default memo(Demo)
