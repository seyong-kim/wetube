WeTube

## Pages : 

- [ ] Home
- [X] join
- [X] login
- [X] Search
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change Password
- [ ] Upload Video
- [ ] Video Detail
- [ ] Edit Video

##Mongo DB :

sudo service mongodb start
sudo service mongodb status
sudo service mongodb stop

##Port 충돌
netstat -ano -p //실행 중 + PID 동시 조회
kill -9 [PID] // 강제 종료

##nodemon

nodemon --exec babel-node init.js

구름 IDE 내에서 재시작시 Port 충돌 문제가 지속적으로 발생하여 일시적으로 관련 내역 삭제

##NPM
multer : 업로드된 파일의 URL을 반환함.