
  //Complete the function

	const mapping = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

function letterCombinations(digits) {
    if (!digits) return [];

    const res = [];
    const dfs = (curr, index) => {
        if (index === digits.length) {
            res.push(curr);
            return;
        }

        for (const char of mapping[digits[index] - '0']) {
            dfs(curr + char, index + 1);
        }
    };

    dfs('', 0);
    return res;
}

}


