import React from 'react'

const overlap = {
    idCheck(id) {
        const overlapList = ['lee', 'hee', 'jee'];

        const Overlap = overlapList.includes(id);
        const text = id === '' ? '' : (Overlap ? '이미 사용중인 아이디 입니다.' : '사용가능한 아이디 입니다.');

        return [Overlap, text];
    },
    nickNameCheck(nickName) {
        const overlapList = ['홍길동', '파이썬', '자스'];

        const Overlap = overlapList.includes(nickName);
        const text = nickName === '' ? '' : (Overlap ? '이미 사용중인 닉네임 입니다.' : '사용 가능한 닉네임 입니다');

        return [Overlap, text];
    },
    passwordCheck(password, checkPassword) {
        const same = !(password === checkPassword);
        const text = checkPassword === '' ? '' : (same ? '비밀번호가 일치하지 않습니다.' : '');

        return [same, text];
    },
}

export default overlap;