import OverlapApi from '../../api/OverlapApi'

const overlap = {
    idCheck: async (id) => {
        if (!id) return ['', ''];

        const Overlap = await OverlapApi(id, "id")
        const text = Overlap ? '이미 사용중인 아이디 입니다.' : '사용가능한 아이디 입니다.';

        return [Overlap, text];
    },
    nickNameCheck: async (nickName) => {
        if (!nickName) return ['', ''];

        const Overlap = await OverlapApi(nickName, 'nickName');
        const text = Overlap ? '이미 사용중인 닉네임 입니다.' : '사용 가능한 닉네임 입니다';

        return [Overlap, text];
    },
    passwordCheck(password, checkPassword) {
        const same = !(password === checkPassword);
        const text = checkPassword === '' ? '' : (same ? '비밀번호가 일치하지 않습니다.' : '');

        return [same, text];
    },
}

export default overlap;

