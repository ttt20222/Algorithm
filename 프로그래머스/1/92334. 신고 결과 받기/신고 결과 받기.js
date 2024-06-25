function solution(id_list, report, k) {
    const newRepo = [...new Set(report)];  //중복제거
    const out = [];  //정지아이디
    const count = Array(id_list.length).fill(0);  //신고수
    const mailCount = Array(id_list.length).fill(0);  //메일 받는 수
    
    for (let id of newRepo) {
        let userId = id.split(' ')[0];  //유저id
        let reportId = id.split(' ')[1];  //신고한id
        let idxR = id_list.indexOf(reportId);
        count[idxR] += 1;
        
        if(count[idxR] >= k) {
            out.push(id_list[idxR]);
        }
    };
    
    newRepo.map((r,idx) => {
        let userId = r.split(' ')[0];  //유저id
        let reportId = r.split(' ')[1];  //신고한id
        
        if(out.indexOf(reportId) != -1) {
            let idx = id_list.indexOf(userId);
            mailCount[idx] += 1;
        }
    })
    
    return mailCount;

}