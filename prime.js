//素数を判定するプログラム
n = prompt("nに値を入力")
let i = 2
while (i<n) {
    if (n%i == 0) {
        document.write(n+"は合成数で、"+i+"で割り切れます。")
        break
    }
    else if (i == n-1) {
        document.write(n+"は素数です。")
        break
    }
    else {
        i++;
    }
}
