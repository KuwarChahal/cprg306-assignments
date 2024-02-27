import StudentInfo from "./student-info"

export default function Page(){
    return(
        <main style={{ padding: '20px', fontSize: '20px' }}>
            <h1>Student Information</h1>
            <StudentInfo></StudentInfo>
        </main>
    );
}