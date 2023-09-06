import { MessageOutlined, SmileOutlined } from '@ant-design/icons';
import { useEffect, useMemo, useState } from 'react';
// 导入 Slate 编辑器的工厂函数。
import { createEditor } from 'slate';

// 导入 Slate 组件和 React 插件。
import { Slate, Editable, withReact } from 'slate-react';
import styles from './index.module.less';

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: '' }],
  },
];

const ChatBox = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const onHandleKeyword = (event: KeyboardEvent) => {
    console.log('键盘事件', event);
    if (event.key === 'Enter') {
      event.preventDefault();

      window.socket.send(
        JSON.stringify({
          event: 'events',
          data: '测试ws 发送数据 hello',
        })
      );
      console.log('发送消息');
    }
  };
  useEffect(() => {
    const enterListenerDom = document.getElementById('getEnterListener')!;

    enterListenerDom.addEventListener('keydown', onHandleKeyword);
    return () => {
      enterListenerDom.removeEventListener('keydown', onHandleKeyword);
    };
  }, []);

  return (
    <div className={styles.chatBoxWrapper}>
      <div className={styles.chatBoxTool}>
        <div>
          <SmileOutlined style={{ color: 'rgb(59, 98, 212)' }} />
          <MessageOutlined style={{ color: 'rgb(59, 98, 212)', marginLeft: 8 }} />
        </div>
        <div className={styles.voiceVideoWrapper}></div>
      </div>
      <div className={styles.chatBox}>
        <Slate initialValue={initialValue} editor={editor}>
          <Editable
            className="chatEdit"
            id="getEnterListener"
            style={{
              height: '80px',
              border: '1px solid rgb(59, 98, 212)',
              borderRadius: '8px',
              padding: '8px',
            }}
          />
        </Slate>
      </div>
    </div>
  );
};
export default ChatBox;
