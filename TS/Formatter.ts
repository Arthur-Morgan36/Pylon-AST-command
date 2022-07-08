const SCRIPT: string =
  "{{r}(range,{block}range{s}):{{r}(lvl,{block}lvl{s}):{{r}(override,{block}override{s}):{{r}(silent,{block}silent{s}):{{r}(silence,{block}silence{s}):{{r}(delete,{block}delete{s}):{{r}(dm,{block}dm{s}):{{r}(reactu,{block}reactu{s}):{{r}(blacklist,{block}blacklist{s}):{{r}(require,{block}require{s}):{{r}(redirect,{block}redirect{s}):{{r}(cmd,{block}cmd{s}):{{r}(math,{block}math{s}):{{r}(lower,{block}lower{s}):{{r}(upper,{block}upper{s}):{{r}(in,{block}in{s}):{{r}(assign,{block}assign{s}):{{r}(let,{block}let{s}):{{r}(cycle,{block}cycle{s}):{{r}(list,{block}list{s}):{{r}(index,{block}index{s}):{{r}(td,{block}td{s}):{{r}(urlencode,{block}urlencode{s}):{{r}(random,{block}random{s}):{{r}(#,{block}#{s}):{{r}(strf,{block}strf{s}):{{r}(contains,{block}contains{s}):{{r}(break,{block}break{s}):{{r}(or,{block}or{s}):{{r}(and,{block}and{s}):{{r}(all,{block}all{s}):{{r}(any,{block}any{s}):{{r}(if,{block}if{s}):{{r}(replace,{block}replace{s}):{{r}(join,{block}join{s}):{{r}(server,{block}server{s}):{{r}(target,{block}target{s}):{{r}(user,{block}user{s}):{{r}(args,{block}args{s}):{{r}(uses,{block}uses{s}):{{r}(unix,{block}unix{s}):{{r}(=,{block}={s}):{{r}(:,{operator}:{s}):{{r}($,{operator}${s}):{{r}(-,{operator}-{s}):{{r}(^,{operator}^{s}):{{r}(_,{operator}_{s}):{{r}(~,{operator}~{s}):{{r}(*,{operator}*{s}):{{r}(/,{operator}/{s}):{{r}(+,{operator}+{s}):{{r}(|,{operator}|{s}):{{r}(true,{bool}true{s}):{{r}(false,{bool}false{s}):{{r}(%s,{flag}%s{s}):{{r}(%i,{flag}%i{s}):{{r}(%n,{flag}%n{s}):{{r}(%u,{flag}%u{s}):{{r}(%X,{flag}%X{s}):{{r}(%x,{flag}%x{s}):{{r}(%c,{flag}%c{s}):{{r}(%W,{flag}%W{s}):{{r}(%U,{flag}%U{s}):{{r}(%-j,{flag}%-j{s}):{{r}(%j,{flag}%j{s}):{{r}(%Z,{flag}%Z{s}):{{r}(%z,{flag}%z{s}):{{r}(%f,{flag}%f{s}):{{r}(%-S,{flag}%-S{s}):{{r}(%S,{flag}%S{s}):{{r}(%-M,{flag}%-M{s}):{{r}(%M,{flag}%M{s}):{{r}(%p,{flag}%p{s}):{{r}(%-I,{flag}%-I{s}):{{r}(%I,{flag}%I{s}):{{r}(%-H,{flag}%-H{s}):{{r}(%H,{flag}%H{s}):{{r}(%Y,{flag}%Y{s}):{{r}(%y,{flag}%y{s}):{{r}(%-m,{flag}%m{s}):{{r}(%B,{flag}%B{s}):{{r}(%b,{flag}%b{s}):{{r}(%-d,{flag}%-d{s}):{{r}(%d,{flag}%d{s}):{{r}(%w,{flag}%w{s}):{{r}(%A,{flag}%A{s}):{{r}(%a,{flag}%a{s}):{{r}({d},{bracket}{d}{s}):{{r}({b},{bracket}{b}{s})";

enum Colors {
  Gray = 30,
  Red = 31,
  Green = 32,
  Yellow = 33,
  Blue = 34,
  Pink = 35,
  Cyan = 36,
  White = 37,
}

const ESC: "\u001B" = "";
const PREFIX: "\u001B[0;" = `${ESC}[0;`;
const SUFFIX: "\u001B[0m" = `${ESC}[0m`;

const bracket: string = `${PREFIX}${Colors.Red}m`;
const operator: string = `${PREFIX}${Colors.Blue}m`;
const bool: string = `${PREFIX}${Colors.Yellow}m`;
const flags: string = `${PREFIX}${Colors.Red}m`;
const block: string = `${PREFIX}${Colors.Green}m`;

function formatTagScriptToTS(str: string) {
  const cleanedUpStr = str
    .replace(/\{\{r\}|\(|\)|\{d\}|\{b\},/g, "")
    .replace(/:/g, "\n");

  const formattedStr =
    "{" +
    cleanedUpStr
      .replace(/\{block\}/g, `${block}`)
      .replace(/\{operator\}/g, `${operator}`)
      .replace(/\{bool\}/g, `${bool}`)
      .replace(/\{flag\}/g, `${flags}`)
      .replace(/\{bracket\}/g, `${bracket}`)
      .replace(/\{s\}/g, `${SUFFIX}`)
      .replace(/\,/g, ": ") +
    "}";

  console.log(formattedStr);
  return {
    range: "[0;32mrange[0m ",
    lvl: " [0;32mlvl[0m ",
    override: " [0;32moverride[0m ",
    silent: " [0;32msilent[0m ",
    silence: " [0;32msilence[0m ",
    delete: " [0;32mdelete[0m ",
    dm: " [0;32mdm[0m ",
    reactu: " [0;32mreactu[0m ",
    blacklist: " [0;32mblacklist[0m ",
    require: " [0;32mrequire[0m ",
    redirect: " [0;32mredirect[0m ",
    cmd: " [0;32mcmd[0m ",
    math: " [0;32mmath[0m ",
    lower: " [0;32mlower[0m ",
    upper: " [0;32mupper[0m ",
    in: " [0;32min[0m ",
    assign: " [0;32massign[0m ",
    let: " [0;32mlet[0m ",
    cycle: " [0;32mcycle[0m ",
    list: " [0;32mlist[0m ",
    index: " [0;32mindex[0m ",
    td: " [0;32mtd[0m ",
    urlencode: " [0;32murlencode[0m ",
    random: " [0;32mrandom[0m ",
    "#": "[0;32m#[0m ",
    strf: " [0;32mstrf[0m ",
    contains: " [0;32mcontains[0m ",
    break: " [0;32mbreak[0m ",
    or: " [0;32mor[0m ",
    and: " [0;32mand[0m ",
    all: " [0;32mall[0m ",
    any: " [0;32many[0m ",
    if: " [0;32mif[0m ",
    replace: " [0;32mreplace[0m ",
    join: " [0;32mjoin[0m ",
    server: " [0;32mserver[0m ",
    target: " [0;32mtarget[0m ",
    user: " [0;32muser[0m ",
    args: " [0;32margs[0m ",
    uses: " [0;32muses[0m ",
    unix: " [0;32munix[0m ",
    "=": "[0;32m=[0m ",
    ":": "[0;34m ",
    "": "[0m ",
    $: "[0;34m$[0m ",
    "-": "[0;34m-[0m ",
    "^": "[0;34m^[0m ",
    _: " [0;34m_[0m ",
    "~": "[0;34m~[0m ",
    "*": "[0;34m*[0m ",
    "/": "[0;34m/[0m ",
    "+": "[0;34m+[0m ",
    "|": "[0;34m|[0m ",
    true: " [0;33mtrue[0m ",
    false: " [0;33mfalse[0m ",
    "%s": "[0;31m%s[0m ",
    "%i": "[0;31m%i[0m ",
    "%n": "[0;31m%n[0m ",
    "%u": "[0;31m%u[0m ",
    "%X": "[0;31m%X[0m ",
    "%x": "[0;31m%x[0m ",
    "%c": "[0;31m%c[0m ",
    "%W": "[0;31m%W[0m ",
    "%U": "[0;31m%U[0m ",
    "%-j": "[0;31m%-j[0m ",
    "%j": "[0;31m%j[0m ",
    "%Z": "[0;31m%Z[0m ",
    "%z": "[0;31m%z[0m ",
    "%f": "[0;31m%f[0m ",
    "%-S": "[0;31m%-S[0m ",
    "%S": "[0;31m%S[0m ",
    "%-M": "[0;31m%-M[0m ",
    "%M": "[0;31m%M[0m ",
    "%p": "[0;31m%p[0m ",
    "%-I": "[0;31m%-I[0m ",
    "%I": "[0;31m%I[0m ",
    "%-H": "[0;31m%-H[0m ",
    "%H": "[0;31m%H[0m ",
    "%Y": "[0;31m%Y[0m ",
    "%y": "[0;31m%y[0m ",
    "%-m": "[0;31m%m[0m ",
    "%B": " [0;31m%B[0m ",
    "%b": " [0;31m%b[0m ",
    "%-d": "[0;31m%-d[0m ",
    "%d": " [0;31m%d[0m ",
    "%w": " [0;31m%w[0m ",
    "%A": " [0;31m%A[0m ",
    "%a": " [0;31m%a[0m ",
    "{": "[0;31m[0m ",
    "}": "[0;31m[0m ",
  };
}

formatTagScriptToTS(SCRIPT);
