FROM gradle:jdk8

COPY . /app
WORKDIR /app

RUN gradle build

ENTRYPOINT ["java", "-jar", "build/libs/docker-practice-0.1.0.war"]