"""Backend API tests for Kıbrıs Night Club"""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://girne-social-events.preview.emergentagent.com").rstrip("/")


@pytest.fixture
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# --- Health check ---
def test_root(api):
    r = api.get(f"{BASE_URL}/api/")
    assert r.status_code == 200
    data = r.json()
    assert "message" in data


# --- Contact endpoints ---
class TestContact:
    def test_create_contact_message_and_persist(self, api):
        payload = {
            "name": "TEST_John Doe",
            "phone": "+905001112233",
            "message": "Hello, I would like more information.",
            "email": "test@example.com",
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["name"] == payload["name"]
        assert body["phone"] == payload["phone"]
        assert body["message"] == payload["message"]
        assert body["email"] == payload["email"]
        assert "id" in body and isinstance(body["id"], str)

        # GET should include it
        g = api.get(f"{BASE_URL}/api/contact")
        assert g.status_code == 200
        items = g.json()
        assert isinstance(items, list)
        assert any(i["id"] == body["id"] for i in items)

    def test_create_contact_no_email(self, api):
        payload = {
            "name": "TEST_Jane",
            "phone": "+905001112244",
            "message": "Test without email",
        }
        r = api.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["email"] is None
        assert body["name"] == "TEST_Jane"

    def test_create_contact_validation_fail(self, api):
        # missing required name
        r = api.post(f"{BASE_URL}/api/contact", json={"phone": "x", "message": "y"})
        assert r.status_code == 422

    def test_create_contact_empty_message(self, api):
        r = api.post(f"{BASE_URL}/api/contact", json={"name": "A", "phone": "B", "message": ""})
        assert r.status_code == 422

    def test_list_contact_returns_no_mongo_id(self, api):
        r = api.get(f"{BASE_URL}/api/contact?limit=5")
        assert r.status_code == 200
        for item in r.json():
            assert "_id" not in item
            assert "id" in item
            assert "created_at" in item


# --- Status check endpoints ---
class TestStatus:
    def test_create_status_and_list(self, api):
        r = api.post(f"{BASE_URL}/api/status", json={"client_name": "TEST_client"})
        assert r.status_code == 200, r.text
        body = r.json()
        assert body["client_name"] == "TEST_client"
        assert "id" in body
        assert "timestamp" in body

        g = api.get(f"{BASE_URL}/api/status")
        assert g.status_code == 200
        items = g.json()
        assert any(i["id"] == body["id"] for i in items)
