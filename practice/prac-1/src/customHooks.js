import { useEffect , useState} from "react";

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);

useEffect(() => {
  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  return () => {
    ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  };
});
return isOnline; // 조건부 안됨!! 
}

//FriendStatus: 친구가 online인지 offline인지 return하는 컴포넌트
function FriendStatus(props) {
    // online인지 offline인지 상태 확인
    // const [isOnline, setIsOnline] = useState(null);
    // useEffect(() => {
    //     function handleStatusChange(status) {
    //         setIsOnline(status.isOnline)
    //     }
    //     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    //     return () => {
    //         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    //     }
    // })

    // 위 중복 로직을 한줄로! 
    const isOnline = useFriendStatus(props.friend.id)

    // 아래 함수랑 식이 여기 부터 다름 -> online? ,offline?
    if(isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}

//FriendListItem : 친구가 online일 때 초록색으로 표시하는 컴포넌트
function FriendListItem(props) {
    // online인지 offline인지 상태 확인
    // const [isOnline, setIsOnline] = useState(null);
    // useEffect(() => {
    //   function handleStatusChange(status) {
    //     setIsOnline(status.isOnline);
    //   }
    //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    //   return () => {
    //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    //   };
    // });

    // 위 중복 로직을 한줄로! 
    const isOnline = useFriendStatus(props.friend.id); 
    // 위 함수랑 식이 여기 부터 다름 -> 초록색 표시 
  
    return (
      <li style={{ color: isOnline ? 'green' : 'black' }}>
        {props.friend.name}
      </li>
    );
  }