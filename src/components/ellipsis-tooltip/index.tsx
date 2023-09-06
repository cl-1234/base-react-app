import { isElementTextOverflow } from '@/utils/common';
import { Tooltip } from 'antd';
import { TooltipPlacement, TooltipPropsWithTitle } from 'antd/lib/tooltip';
import { useCallback, useRef, useState } from 'react';
import styles from './index.module.less';

interface IEllipsisTooltipProps extends Omit<TooltipPropsWithTitle, 'children'> {
  title: string;
  placement?: TooltipPlacement;
  children: React.ReactNode;
  maxWidth?: number;
}

export const EllipsisTooltip: React.FC<IEllipsisTooltipProps> = ({
  title,
  children,
  placement = 'topLeft',
  getPopupContainer = () => document.body,
  maxWidth,
  ...restTooltipProps
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleVisibleChange = useCallback((visible: boolean) => {
    const el = ref.current;
    if (visible && el) {
      isElementTextOverflow(el) && setVisible(true);
    } else {
      setVisible(false);
    }
  }, []);

  return (
    <Tooltip
      placement={placement}
      title={title}
      open={visible}
      onOpenChange={handleVisibleChange}
      getPopupContainer={getPopupContainer}
      {...restTooltipProps}
    >
      <div className={styles['ellipsisWrapper']} style={{ maxWidth: maxWidth }} ref={ref}>
        {children}
      </div>
    </Tooltip>
  );
};

export default EllipsisTooltip;
