# isak-capgem-test

Code test as part of the Capgemini interview process

# Set up the EC2 and RDS postgres database instance

Install the necessary aws packages on your computer (MacOS)

    $ brew install awscli
    $ aws --version
    $ aws configure

You’ll be prompted to enter your AWS Access Key ID, Secret Access Key, default region, and output format. Follow the prompts and provide the required information.

Then run:

    $ aws cloudformation create-stack --stack-name ec2-example --template-body file://cloudformation-template-ec2.yml \
    --parameters ParameterKey=AvailabilityZone,ParameterValue=eu-north-1b \
    ParameterKey=EnvironmentType,ParameterValue=dev \
    ParameterKey=KeyPairName,ParameterValue=capgem-ec2 \
    ParameterKey=DBPassword,ParameterValue=Abcd1234

Tear down stack if not in use in order to avoid getting charged by AWS

    $ aws cloudformation delete-stack --stack-name ec2-example

# Run the app locally

If you already have Node.js installed, then run:

    $ npm install

## Create an .env file in root

    FOOBAR=foobar
    NODE_ENV=development
    DEV_PG_DB=your_db
    DEV_PG_DB_USER=postgres
    DEV_PG_DB_PW=postgres
    DEV_PG_DB_PORT=   # this will default to 5432

    # AWS RDS credentials goes here
    RDS_PG_HOST=
    RDS_PG_DB=
    RDS_PG_DB_USER=
    RDS_PG_DB_PW=

## Run the Express.js app

    $ DEBUG=isak-capgem-test:\* npm start

# Run the migration files to set up the database tables

`npx knex migrate:latest --knexfile db/knexfile.js`

# Generate a migration file using Knex.js

    $ npx knex migrate:make MIGRATION_NAME --migrations-directory db/migrations
