import Link from "next/link"

export default function StudentInfo(){
    return(
        <div>
            <div><i>Name: </i> <b>Kowarjit Chahal</b></div>
            <i>Github link: </i><Link href="https://github.com/KuwarChahal/cprg306-assignments">https://github.com/KuwarChahal</Link>
        </div>
    );
}