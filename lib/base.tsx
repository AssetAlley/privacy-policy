type Applicant = {
    firstName?: string;
    lastName?: string;
}
export const Base = ({
    firstName = "APPLICANT_FIRST_NAME",
    lastName = "APPLICANT_LAST_NAME",
} : Applicant) => {
    return (
        <p>{firstName} {lastName}</p>
    )
}