CREATE TABLE video (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(50) NOT NULL,
  description TEXT,
  youtube_video_id VARCHAR(20) NOT NULL, -- e.g., "dQw4w9WgXcQ"
  language VARCHAR(50), -- e.g., 'english', 'spanish'
  order_in_course INTEGER, -- to sort within a course/module
  is_active BOOLEAN DEFAULT TRUE, -- to hide/show on frontend
  create_date TIMESTAMP NOT NULL DEFAULT now()
);
