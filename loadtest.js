import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    vus: 10, // 10 sanal kullanıcı
    duration: '30s', // 30 saniye boyunca test yap
};

export default function () {
    let res = http.get('http://test.k6.io');
    check(res, { 'status was 200': (r) => r.status === 200 });
    sleep(1);
}
