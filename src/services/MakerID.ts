export default function makerID(...strings: string[]) {

    let baseString: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+-=~`{}[]|:;'<>,.?/";
    let codeLength: number = 14;
    let generatedCode: string = "";

    for (let s in strings) {
        let l: number = s.length >= 3 ? 3 : s.length;
        generatedCode += s.trim().substring(0, l)
    }

    for (let i = 0; i < codeLength; i++) {
        generatedCode += baseString.charAt(Math.floor(Math.random() * baseString.length));
    }

    return generatedCode;
}