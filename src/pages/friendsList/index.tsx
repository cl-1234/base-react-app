import {
  ArrowLeftOutlined,
  MoreOutlined,
  PlusOutlined,
  RedoOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import { Button, Input } from 'antd';
import styles from './index.module.less';
import DefaultMan from '@/static/images/default-man.png';
import EllipsisTooltip from '@/components/ellipsis-tooltip';
import ChatBox from '@/components/chat-box';

const FriendsList = () => {
  return (
    <div className={styles.friendsListWrapper}>
      <div className={styles.header}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.listWrapper}>
          <div className={styles.listHeader}>
            <div className={styles.listShow}>
              <div className={styles.split} />
              <div>好友列表</div>
            </div>
            <div className={styles.listOperate}>
              <RedoOutlined style={{ color: '#3B62D4', cursor: 'pointer' }} />
              <PlusOutlined style={{ color: '#3B62D4', cursor: 'pointer', marginLeft: 12 }} />
            </div>
          </div>
          <Input
            placeholder="搜索好友"
            suffix={<SearchOutlined />}
            style={{
              marginTop: 12,
              marginBottom: 12,
              border: '1px solid #C4D0E5',
              borderRadius: '4px',
            }}
          />
          <div className={styles.list}>
            <div className={[styles.friend, styles.selectedFriend].join(' ')}>
              <div className={styles.friendDetail}>
                <img className={styles.avatar} alt="" src={DefaultMan} />
                <div className={styles.nameALast}>
                  <div className={styles.noteName}>
                    <EllipsisTooltip title="可爱好看的小颖">可爱好看的小颖</EllipsisTooltip>
                  </div>
                  <div className={styles.lastestNotice}>
                    <EllipsisTooltip title="好好嘞好嘞好嘞好嘞好嘞好嘞好嘞好嘞好嘞嘞">
                      好好嘞好嘞
                    </EllipsisTooltip>
                  </div>
                </div>
              </div>
              <div className={styles.operate}>
                <PlusOutlined style={{ color: '#C4D0E5', cursor: 'pointer', marginRight: 4 }} />
                <MoreOutlined style={{ color: '#C4D0E5', cursor: 'pointer' }} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.chatContent}>
          <div className={styles.chatListWrapper}>
            <div className={styles.chatHeader}>
              <ArrowLeftOutlined />
              <div className={styles.noteName}>小颖</div>
              <div>
                <Button>修改备注</Button>
                <Button style={{ marginLeft: 8 }}>查看朋友圈</Button>
              </div>
            </div>
            <div className={styles.chatList}></div>
            <div className={styles.chatBox}>
              <ChatBox />
            </div>
          </div>
        </div>
        <div className={styles.friendsCircle}></div>
      </div>
    </div>
  );
};
export default FriendsList;
