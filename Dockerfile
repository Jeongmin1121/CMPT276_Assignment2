FROM maven:3.6.3-openjdk-17 As build
COPY . . 
RUN mvn clean package -DskipTests

FROM openjdk:17-jdk-slim
COPY --from=build /target/assignment2-0.0.1-SNAPSHOT.jar assignment2.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "assignment2.jar"]
