export const setRoomIdF = (params: any, setRoomId: (roomId: string) => void) => {
  params.then((resolvedParams: any) => {
    if (resolvedParams.roomId) {
      setRoomId(resolvedParams.roomId);
    }
  });
}