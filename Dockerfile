FROM alpine:latest
RUN apk add --no-cache curl unzip
RUN curl -L https://github.com/pocketbase/pocketbase/releases/latest/download/pocketbase_0.22.14_linux_amd64.zip -o pb.zip && \
    unzip pb.zip && rm pb.zip
COPY pb_data ./pb_data
EXPOSE 10000
CMD ["./pocketbase", "serve", "--http=0.0.0.0:10000"]
