import { Grid } from "@mui/material";
import OutlinedCard from "./OutlinedCard";

interface Props {
    questions: Questions[];
}

export default function CardList({questions} : Props){

    return(

        <Grid container spacing={4}>
        {questions.map(question => (
            <Grid item xs={4} key={question.id}>
                    <OutlinedCard question={question} />
            </Grid>
        ))}
    </Grid>
    )
}