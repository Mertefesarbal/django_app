import pytest 
from ..models import Artifact

# Connects our tests with our database 
pytestmark = pytest.mark.django_db


# add our test function
def test___str__(): 
    artifact = Artifact.objects.create(
        name = "Ephesus", 
        description = "not set up yet",
        firmness =  Artifact.Firmness.SOFT, 
    )
    assert artifact.__str__() == "Ephesus"
    assert str(artifact) == "Ephesus"


