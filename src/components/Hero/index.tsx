import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';

export default function HeroImageRight() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            {' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'pink', to: 'yellow' }}
                            >
                                Güvenilir ve Kaliteli
                            </Text>{' '}
                            İnşaat Hizmetleri
                        </Title>

                        <Text className={classes.description} mt={30}>
                            Tecrübeli ekip, yenilikçi çözümler ve müşteri memnuniyeti odaklı hizmet anlayışıyla en iyi sonuçları sunuyoruz.
                        </Text>

                        <Button
                            variant="gradient"
                            gradient={{ from: 'pink', to: 'yellow' }}
                            size="xl"
                            className={classes.control}
                            mt={40}
                        >
                            Şimdi başvur
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}