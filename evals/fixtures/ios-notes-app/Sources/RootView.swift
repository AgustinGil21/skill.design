import SwiftUI

struct RootView: View {
    @State private var tab = 0

    var body: some View {
        VStack(spacing: 0) {
            HStack {
                Text("Margin").font(.system(size: 22, weight: .bold)).foregroundColor(.white)
                Spacer()
            }
            .padding()
            .background(Color(red: 0.0, green: 0.5, blue: 0.5))
            NotesList()
            HStack {
                ForEach(0..<3) { index in
                    Button(action: { tab = index }) {
                        Image(systemName: ["note.text", "folder", "magnifyingglass"][index])
                    }
                    .frame(maxWidth: .infinity)
                }
            }
            .padding()
            .background(Color(red: 0.0, green: 0.5, blue: 0.5))
        }
    }
}

struct NotesList: View {
    var body: some View {
        List(0..<20) { index in
            Text("Note \(index)")
        }
    }
}
