FROM java:8

COPY build/libs/docker-practice-0.1.0.war /

ENTRYPOINT ["java", "-jar", "/docker-practice-0.1.0.war"]