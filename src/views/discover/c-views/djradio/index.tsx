import type { FC, ReactNode } from 'react'
import { memo } from 'react'
interface IProps {
  children?: ReactNode
}

const DjRadio: FC<IProps> = () => {
  return <div>DjRadio</div>
}

export default memo(DjRadio)
