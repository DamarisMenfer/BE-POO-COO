import java.sql.*;

public class Test()
{
	public void load()
	{
		// Connect to database
		Connection connection = DriverManager.getConnection("jdbc:sqlite:db.sqlite");
		if (connection == null)
			return;

		// Select messages exchanged with the user 
		try {
			Statement statement = connection.createStatement();
			String SQLRequest = "SELECT type, direction, date, content FROM message WHERE username = \"" + remoteUser.getUsername() + "\";";
			ResultSet results = statement.executeQuery(SQLRequest);

			// Loop through results
			ArrayList<Message<?>> messages = remoteUser.getHistory().messages;
			messages.clear();
			while (results.next()) {
				Type type = Message.types.get(results.getInt(1));
				Direction direction = Message.directions.get(results.getInt(2));
				Date timestamp = new Date(results.getLong(3) * 1000); // Seconds to milliseconds
				byte[] content = results.getBytes(4);

				// Forge message
				// MessageBlob prevents loss of information (instantiating Message is not possible due to its abstract type)
				MessageBlob message = new MessageBlob(type, direction, timestamp, content);
				System.out.println(message.toString());
				messages.add(message);
			}

			// Close database
			connection.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public void save()
	{
		// TODO: create table if not existing
		
		// Connect to database
		Connection connection = DriverManager.getConnection("jdbc:sqlite:db.sqlite");
		if (connection == null)
			return;

		String SQLRequest = "INSERT INTO user VALUES(\"" + remoteUser.getUsername() + "\");";
		Statement statement = null;
		try {
			statement = connection.createStatement();

			// Insert user in case it doesn't exist
			statement.executeUpdate(SQLRequest);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			// Insert messages
			for (Message<?> message : messages) {
				SQLRequest = "INSERT INTO message VALUES(\"" + remoteUser.getUsername() + "\", " + Message.types.indexOf(message.getType()) + ", " + Message.directions.indexOf(message.getDirection()) + ", " + message.getTimestamp().getTime() / 1000 + ", \"" + message.getContent() + "\");";
				System.out.println("<<<REQ: " + SQLRequest);
				try {
					statement.executeUpdate(SQLRequest);
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
	}
}
