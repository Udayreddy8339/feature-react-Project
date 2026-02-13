terraform {
  backend "s3" {
    bucket  = "react-terraform-state"
    key     = "react-project/terraform.tfstate"
    region  = "ap-south-1"
    encrypt = true
  }
}
