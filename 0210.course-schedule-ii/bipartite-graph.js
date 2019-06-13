/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const list = [];
    const result = [];

    // 构造列表
    for (let i = 0; i < numCourses; ++i) {
        list[i] = {
            pre: [],
            next: [],
        };
    }

    // 构造图
    for (let i = 0, l = prerequisites.length; i < l; ++i) {
        list[prerequisites[i][0]].pre.push(prerequisites[i][1]);
        list[prerequisites[i][1]].next.push(prerequisites[i][0]);
    }

    while (true) {
        let start = list.findIndex(course => course && !course.pre.length);

        if (-1 === start) {
            break;
        }

        result.push(start);
        // 逐个删掉 pre
        for (let i = 0, l = list[start].next.length; i < l; ++i) {
            const pre = list[list[start].next[i]].pre;
            const index = pre.indexOf(start);

            if (-1 !== index) {
                pre.splice(index, 1);
            }
        }

        list[start] = undefined;
    }

    if (result.length === numCourses) {
        return result;
    }

    // 没清理干净, boom
    return [];
};
