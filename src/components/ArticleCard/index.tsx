import { Paper, Text, Title, Button } from '@mantine/core';
import classes from './ArticleCardImage.module.css';

export function ArticleCardImage({ category }: { category: string}) {
    return (
        <Paper shadow="md" p="xl" radius="md" className={classes.card}>
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    Best forests to visit in North America
                </Title>
            </div>
            <Button variant="white" color="dark">
                İncele
            </Button>
        </Paper>
    );
}